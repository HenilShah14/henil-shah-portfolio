import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

interface HeroThreeSceneProps {
  className?: string;
}

export default function HeroThreeScene({ className = '' }: HeroThreeSceneProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [webglSupported, setWebglSupported] = useState<boolean>(true);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Check prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setWebglSupported(false);
      return;
    }

    // Check WebGL availability
    const checkWebGL = () => {
      try {
        const canvas = document.createElement('canvas');
        return !!(
          window.WebGLRenderingContext &&
          (canvas.getContext('webgl') || canvas.getContext('experimental-webgl'))
        );
      } catch {
        return false;
      }
    };

    if (!checkWebGL()) {
      setWebglSupported(false);
      return;
    }

    const isMobile = window.innerWidth < 768;
    const particleCount = isMobile ? 80 : 220;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      55,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 24;

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: !isMobile,
        powerPreference: 'high-performance',
      });
    } catch {
      setWebglSupported(false);
      return;
    }

    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, isMobile ? 1.5 : 2));
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);

    // Group for objects with mouse rotation
    const worldGroup = new THREE.Group();
    scene.add(worldGroup);

    // 1. Futuristic Digital Wireframe Sphere (Technological Core)
    const sphereGeo = new THREE.IcosahedronGeometry(7.5, isMobile ? 2 : 3);
    const sphereMat = new THREE.MeshBasicMaterial({
      color: 0x00e5ff,
      wireframe: true,
      transparent: true,
      opacity: 0.16,
    });
    const sphere = new THREE.Mesh(sphereGeo, sphereMat);
    worldGroup.add(sphere);

    // Inner wireframe sphere
    const innerSphereGeo = new THREE.IcosahedronGeometry(4.8, 1);
    const innerSphereMat = new THREE.MeshBasicMaterial({
      color: 0x0066ff,
      wireframe: true,
      transparent: true,
      opacity: 0.22,
    });
    const innerSphere = new THREE.Mesh(innerSphereGeo, innerSphereMat);
    worldGroup.add(innerSphere);

    // 2. Floating Abstract Geometric Shapes
    const geometries = [
      new THREE.OctahedronGeometry(1.2, 0),
      new THREE.TetrahedronGeometry(1.4, 0),
      new THREE.BoxGeometry(1.2, 1.2, 1.2),
      new THREE.IcosahedronGeometry(1.0, 0),
    ];

    const floatingGroup = new THREE.Group();
    const floatingMeshes: { mesh: THREE.Mesh; rotSpeed: { x: number; y: number; z: number } }[] = [];

    const floatingShapeCount = isMobile ? 5 : 12;
    for (let i = 0; i < floatingShapeCount; i++) {
      const geo = geometries[i % geometries.length];
      const mat = new THREE.MeshBasicMaterial({
        color: i % 2 === 0 ? 0x00e5ff : 0x0066ff,
        wireframe: true,
        transparent: true,
        opacity: 0.28,
      });
      const mesh = new THREE.Mesh(geo, mat);

      // Distribute in a spherical halo around center
      const angle = (i / floatingShapeCount) * Math.PI * 2;
      const radius = 9 + (i % 3) * 2.5;
      mesh.position.set(
        Math.cos(angle) * radius + (Math.random() - 0.5) * 3,
        Math.sin(angle) * radius * 0.75 + (Math.random() - 0.5) * 3,
        (Math.random() - 0.5) * 8
      );

      floatingGroup.add(mesh);
      floatingMeshes.push({
        mesh,
        rotSpeed: {
          x: (Math.random() - 0.5) * 0.012,
          y: (Math.random() - 0.5) * 0.015,
          z: (Math.random() - 0.5) * 0.01,
        },
      });
    }
    worldGroup.add(floatingGroup);

    // 3. Digital Particles
    const particlesGeo = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);
    const particleColors = new Float32Array(particleCount * 3);

    const cyanColor = new THREE.Color(0x00e5ff);
    const electricColor = new THREE.Color(0x0066ff);
    const violetColor = new THREE.Color(0x8b5cf6);

    for (let i = 0; i < particleCount; i++) {
      particlePositions[i * 3] = (Math.random() - 0.5) * 36;
      particlePositions[i * 3 + 1] = (Math.random() - 0.5) * 26;
      particlePositions[i * 3 + 2] = (Math.random() - 0.5) * 24;

      const mixedColor =
        i % 3 === 0 ? cyanColor : i % 3 === 1 ? electricColor : violetColor;
      particleColors[i * 3] = mixedColor.r;
      particleColors[i * 3 + 1] = mixedColor.g;
      particleColors[i * 3 + 2] = mixedColor.b;
    }

    particlesGeo.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
    particlesGeo.setAttribute('color', new THREE.BufferAttribute(particleColors, 3));

    const particlesMat = new THREE.PointsMaterial({
      size: isMobile ? 0.16 : 0.22,
      vertexColors: true,
      transparent: true,
      opacity: 0.65,
      blending: THREE.AdditiveBlending,
    });

    const particleSystem = new THREE.Points(particlesGeo, particlesMat);
    worldGroup.add(particleSystem);

    // Mouse Tracking for subtle parallax
    let targetRotationX = 0;
    let targetRotationY = 0;
    let currentRotationX = 0;
    let currentRotationY = 0;

    const handleMouseMove = (event: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const mouseX = (event.clientX / innerWidth) * 2 - 1;
      const mouseY = -(event.clientY / innerHeight) * 2 + 1;

      targetRotationY = mouseX * 0.35;
      targetRotationX = -mouseY * 0.25;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // Handle Resize
    const handleResize = () => {
      if (!container || !renderer) return;
      const width = container.clientWidth;
      const height = container.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    const resizeObserver = new ResizeObserver(() => {
      handleResize();
    });
    resizeObserver.observe(container);

    // Animation Loop
    let animationFrameId: number;
    const startTime = performance.now();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = (performance.now() - startTime) * 0.001;

      // Smooth mouse follow
      currentRotationX += (targetRotationX - currentRotationX) * 0.04;
      currentRotationY += (targetRotationY - currentRotationY) * 0.04;

      worldGroup.rotation.x = currentRotationX + elapsedTime * 0.04;
      worldGroup.rotation.y = currentRotationY + elapsedTime * 0.06;

      // Inner sphere opposite spin
      innerSphere.rotation.x = -elapsedTime * 0.08;
      innerSphere.rotation.y = -elapsedTime * 0.1;

      // Rotate individual floating shapes
      floatingMeshes.forEach(({ mesh, rotSpeed }) => {
        mesh.rotation.x += rotSpeed.x;
        mesh.rotation.y += rotSpeed.y;
        mesh.rotation.z += rotSpeed.z;
      });

      // Pulse particle wave subtly
      const positions = particlesGeo.attributes.position.array as Float32Array;
      for (let i = 0; i < particleCount; i++) {
        const yIndex = i * 3 + 1;
        positions[yIndex] += Math.sin(elapsedTime + i) * 0.003;
      }
      particlesGeo.attributes.position.needsUpdate = true;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      resizeObserver.disconnect();
      cancelAnimationFrame(animationFrameId);

      if (container && renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }

      // Dispose assets
      sphereGeo.dispose();
      sphereMat.dispose();
      innerSphereGeo.dispose();
      innerSphereMat.dispose();
      geometries.forEach((g) => g.dispose());
      particlesGeo.dispose();
      particlesMat.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}
    >
      {/* If WebGL is not supported or reduced-motion is requested, show smooth CSS digital tech fallback */}
      {!webglSupported && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-40">
          <div className="relative w-[340px] h-[340px] sm:w-[500px] sm:h-[500px] rounded-full border border-cyan-500/20 flex items-center justify-center animate-pulse">
            <div className="w-[80%] h-[80%] rounded-full border border-dashed border-blue-500/30" />
            <div className="absolute w-[50%] h-[50%] rounded-full border border-indigo-500/20" />
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/10 via-cyan-500/10 to-transparent blur-2xl rounded-full" />
          </div>
        </div>
      )}

      {/* Atmospheric ambient glow layers */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 left-1/4 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
    </div>
  );
}
