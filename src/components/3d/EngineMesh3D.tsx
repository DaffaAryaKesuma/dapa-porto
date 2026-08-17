'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export function EngineMesh3D() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    let width = container.clientWidth || window.innerWidth;
    let height = container.clientHeight || window.innerHeight;

    // 1. Scene & Camera
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.z = 28;

    // 2. Renderer
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // 3. 3D Mechanical Geometry (Torus Knot Wireframe + Particle Rings + Outer Orbit)
    const group = new THREE.Group();
    scene.add(group);

    // Outer Giant Wireframe Torus
    const torusGeometry = new THREE.TorusKnotGeometry(9.5, 2.4, 120, 20);
    const torusMaterial = new THREE.MeshBasicMaterial({
      color: 0xeab308,
      wireframe: true,
      transparent: true,
      opacity: 0.35,
    });
    const torusKnot = new THREE.Mesh(torusGeometry, torusMaterial);
    group.add(torusKnot);

    // Inner Core Sphere Wireframe (Engine Core)
    const coreGeometry = new THREE.IcosahedronGeometry(5.2, 2);
    const coreMaterial = new THREE.MeshBasicMaterial({
      color: 0x34d399,
      wireframe: true,
      transparent: true,
      opacity: 0.5,
    });
    const coreSphere = new THREE.Mesh(coreGeometry, coreMaterial);
    group.add(coreSphere);

    // Outer Orbit Ring (Tachometer Arc)
    const ringGeometry = new THREE.RingGeometry(13, 13.2, 64);
    const ringMaterial = new THREE.MeshBasicMaterial({
      color: 0x06b6d4,
      wireframe: true,
      transparent: true,
      opacity: 0.25,
      side: THREE.DoubleSide,
    });
    const orbitRing = new THREE.Mesh(ringGeometry, ringMaterial);
    orbitRing.rotation.x = Math.PI / 3;
    group.add(orbitRing);

    // Surrounding Floating Data Particles
    const particleCount = 280;
    const particlesGeometry = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount * 3; i += 3) {
      const radius = 12 + Math.random() * 10;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);

      particlePositions[i] = radius * Math.sin(phi) * Math.cos(theta);
      particlePositions[i + 1] = radius * Math.sin(phi) * Math.sin(theta);
      particlePositions[i + 2] = radius * Math.cos(phi);
    }

    particlesGeometry.setAttribute(
      'position',
      new THREE.BufferAttribute(particlePositions, 3)
    );

    const particlesMaterial = new THREE.PointsMaterial({
      color: 0xeab308,
      size: 0.22,
      transparent: true,
      opacity: 0.75,
    });

    const particles = new THREE.Points(particlesGeometry, particlesMaterial);
    group.add(particles);

    // 4. Mouse Move Tracking for Fullscreen 3D Gyro-Tilt
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (event: MouseEvent) => {
      const x = event.clientX - window.innerWidth / 2;
      const y = event.clientY - window.innerHeight / 2;
      mouseX = (x / window.innerWidth) * 2;
      mouseY = (y / window.innerHeight) * 2;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // 5. Responsive Resize
    const handleResize = () => {
      if (!container) return;
      width = container.clientWidth || window.innerWidth;
      height = container.clientHeight || window.innerHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener('resize', handleResize);

    // 6. Animation Loop
    let animationFrameId: number;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      // Smooth interpolation towards mouse
      targetX += (mouseX - targetX) * 0.04;
      targetY += (mouseY - targetY) * 0.04;

      // Constant rotational velocities
      torusKnot.rotation.x += 0.0025;
      torusKnot.rotation.y += 0.004;

      coreSphere.rotation.x -= 0.003;
      coreSphere.rotation.y -= 0.005;

      orbitRing.rotation.z += 0.002;
      particles.rotation.y += 0.0015;

      // Apply gyro tilt
      group.rotation.y = targetX * 0.9;
      group.rotation.x = -targetY * 0.9;

      renderer.render(scene, camera);
    };

    animate();

    // 7. Cleanup
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);

      torusGeometry.dispose();
      torusMaterial.dispose();
      coreGeometry.dispose();
      coreMaterial.dispose();
      ringGeometry.dispose();
      ringMaterial.dispose();
      particlesGeometry.dispose();
      particlesMaterial.dispose();
      renderer.dispose();

      if (container && renderer.domElement.parentNode === container) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 w-full h-full pointer-events-none select-none overflow-hidden"
      aria-hidden="true"
    />
  );
}
