"use client";

import { useEffect, useRef } from "react";

export default function ThreeCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    let animationId: number;

    (async () => {
      const THREE = await import("three");
      const canvas = canvasRef.current;
      if (!canvas) return;

      const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setClearColor(0x000000, 0);

      const scene  = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
      camera.position.set(0, 0, 30);

      // Lighting — sage palette
      scene.add(new THREE.AmbientLight(0x3d5c35, 0.5));
      const dir = new THREE.DirectionalLight(0x5a7a52, 0.7);
      dir.position.set(5, 10, 5);
      scene.add(dir);

      // Particles — navy/sage tones
      const count = 1000;
      const pos = new Float32Array(count * 3);
      const col = new Float32Array(count * 3);
      for (let i = 0; i < count; i++) {
        pos[i*3]   = (Math.random()-0.5)*200;
        pos[i*3+1] = (Math.random()-0.5)*200;
        pos[i*3+2] = (Math.random()-0.5)*80;
        const t = Math.random();
        if (t < 0.5) {
          // sage-ish
          col[i*3]   = 0.22 + Math.random()*0.15;
          col[i*3+1] = 0.36 + Math.random()*0.15;
          col[i*3+2] = 0.2  + Math.random()*0.1;
        } else {
          // white-ish
          col[i*3]   = 0.6 + Math.random()*0.4;
          col[i*3+1] = 0.7 + Math.random()*0.3;
          col[i*3+2] = 0.6 + Math.random()*0.4;
        }
      }
      const geo = new THREE.BufferGeometry();
      geo.setAttribute("position", new THREE.BufferAttribute(pos, 3));
      geo.setAttribute("color",    new THREE.BufferAttribute(col, 3));
      const particles = new THREE.Points(geo, new THREE.PointsMaterial({
        size: 0.16, vertexColors: true, transparent: true, opacity: 0.6, sizeAttenuation: true,
      }));
      scene.add(particles);

      // Wireframe shapes — sage/navy
      const wm1 = new THREE.MeshBasicMaterial({ color: 0x3d5c35, wireframe: true, transparent: true, opacity: 0.15 });
      const wm2 = new THREE.MeshBasicMaterial({ color: 0x5a7a52, wireframe: true, transparent: true, opacity: 0.12 });

      const shapes: import("three").Mesh[] = [];
      const mkShape = (g: import("three").BufferGeometry, m: import("three").MeshBasicMaterial, x:number,y:number,z:number,rx:number,ry:number) => {
        const mesh = new THREE.Mesh(g, m.clone());
        mesh.position.set(x,y,z); mesh.rotation.set(rx,ry,0);
        scene.add(mesh); shapes.push(mesh);
      };
      mkShape(new THREE.OctahedronGeometry(3,0),    wm1, -18,  8, -10, 0.3, 0.5);
      mkShape(new THREE.IcosahedronGeometry(2.5,0), wm2,  18, -6,  -8, 0.1, 0.2);
      mkShape(new THREE.BoxGeometry(4,4,4),          wm1,  -8,-12,  -5, 0.4, 0.6);
      mkShape(new THREE.ConeGeometry(2.5,5,8),       wm2,  14, 12, -12, 0.2, 0.1);
      mkShape(new THREE.OctahedronGeometry(2,1),     wm1,   6, -8, -15, 0.5, 0.8);
      mkShape(new THREE.IcosahedronGeometry(1.8,0),  wm2, -14, -5,  -6, 0.6, 0.3);

      const torusKnot = new THREE.Mesh(
        new THREE.TorusKnotGeometry(7,1.8,120,16,2,3),
        new THREE.MeshBasicMaterial({ color: 0x1a2b45, wireframe: true, transparent: true, opacity: 0.06 })
      );
      torusKnot.position.set(0,0,-20);
      scene.add(torusKnot);

      let mouseX=0, mouseY=0, targetX=0, targetY=0;
      const onMouse = (e:MouseEvent) => {
        mouseX = (e.clientX/window.innerWidth  - 0.5)*2;
        mouseY = (e.clientY/window.innerHeight - 0.5)*2;
      };
      document.addEventListener("mousemove", onMouse);
      const onResize = () => {
        camera.aspect = window.innerWidth/window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
      };
      window.addEventListener("resize", onResize);

      let t = 0;
      const animate = () => {
        animationId = requestAnimationFrame(animate);
        t += 0.005;
        targetX += (mouseX*3 - targetX)*0.04;
        targetY += (-mouseY*2 - targetY)*0.04;
        camera.position.x = targetX;
        camera.position.y = targetY;
        camera.lookAt(scene.position);
        torusKnot.rotation.x = t*0.18;
        torusKnot.rotation.y = t*0.12;
        shapes.forEach((s,i)=>{
          s.rotation.x += 0.003+i*0.0005;
          s.rotation.y += 0.004+i*0.0003;
          s.position.y += Math.sin(t+i*1.2)*0.006;
        });
        particles.rotation.y = t*0.012;
        particles.rotation.x = t*0.006;
        renderer.render(scene,camera);
      };
      animate();

      return () => {
        cancelAnimationFrame(animationId);
        document.removeEventListener("mousemove", onMouse);
        window.removeEventListener("resize", onResize);
        renderer.dispose();
      };
    })();

    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <canvas ref={canvasRef} className="fixed inset-0 w-full h-full z-0 pointer-events-none" />
  );
}
