import React, { useState, useEffect, useRef } from "react";
import "./avion.css";
import explosionGif from "../assets/images/boom.gif";
import { useTransition, animated } from "react-spring";



function Abion() {
  const [score, setScore] = useState(0);
  const [hero1, setHero1] = useState({ x: 500, y: 500 });
  const [enemies1, setEnemies1] = useState([]);
  const [explosionses, setExplosions] = useState([]); // Añade esta línea


const containerRef = useRef(null);

  function moveEnemies() {
    setEnemies((enemies) => {
      if (enemies.length < 2) {
        return [
          ...enemies.map((enemy) => {
            return { ...enemy, y: enemy.y + 1 };
          }),
          ...(containerRef.current
            ? [{ x: Math.random() * containerRef.current.offsetWidth, y: 0 }]
            : []),
        ];
      } else {
        return enemies.map((enemy) => {
          return { ...enemy, y: enemy.y + 1 };
        });
      }
    });
  }
function checkCollision(obj1, obj2) {
  return (
    obj1.x < obj2.x + obj2.width &&
    obj1.x + obj1.width > obj2.x &&
    obj1.y < obj2.y + obj2.height &&
    obj1.y + obj1.height > obj2.y
  );
}



  function moveBullets() {
    setBullets((bullets) =>
      bullets.map((bullet) => {
        return { ...bullet, y: bullet.y - 5 };
      })
    );
  }
function detectCollision() {
  setBullets((bullets) =>
    bullets.filter((bullet) => {
      let collision = false;
      setEnemies((enemies) =>
        enemies.filter((enemy) => {
          if (
            Math.abs(bullet.x - enemy.x) < 15 &&
            Math.abs(bullet.y - enemy.y) < 10
          ) {
            collision = true;
            setScore((score) => score + 100);
            setExplosions((explosions) => [
              ...explosions,
              { x: bullet.x, y: bullet.y },
            ]);
            return false; // Elimina el enemigo del estado
          }
          return true; // Mantiene el enemigo en el estado
        })
      );
      return !collision; // Mantiene la bala en el estado si no hubo colisión
    })
  );
  setBullets((bullets) =>
    bullets.filter((bullet) => {
      const isCollision = enemies2.some((enemy) => {
        return (
          Math.abs(bullet.x - enemy.x) < 15 && Math.abs(bullet.y - enemy.y) < 10
        );
      });
      if (isCollision) {
        setScore((score) => score + 100);
        setExplosions((explosions) => [
          ...explosions,
          { x: bullet.x, y: bullet.y },
        ]);
      }
      return !isCollision;
    })
  );
}
  const [hero, setHero] = useState({ x: 500, y: 500 });
  const [enemies, setEnemies] = useState([
    { x: 50, y: 50 },
    { x: 250, y: 50 },
    { x: 450, y: 50 },
    { x: 600, y: 50 },
    { x: 700, y: 50 },
  ]);
  const [enemies2, setEnemies2] = useState([
    { x: 100, y: 150 },
    { x: 350, y: 150 },
    { x: 550, y: 150 },
    { x: 650, y: 150 },
    { x: 750, y: 150 },
  ]);
  const [bullets, setBullets] = useState([]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (containerRef.current) {
        setEnemies((enemies) => [
          ...enemies.map((enemy) => {
            return { ...enemy, y: enemy.y + 1 };
          }),
          { x: Math.random() * containerRef.current.offsetWidth, y: 0 }, 
        ]);
      }
    }, 1000); 

    return () => clearInterval(intervalId); // Limpia el intervalo cuando el componente se desmonta
  }, []);
  useEffect(() => {
    const gameLoop = () => {
      moveEnemies();
      moveBullets();
      detectCollision();
      detectCollisionWithEnemy();
    };

    const detectCollisionWithEnemy = () => {
      setEnemies((enemies) =>
        enemies.map((enemy, index) => {
          if (
            Math.abs(hero.x - enemy.x) < 15 &&
            Math.abs(hero.y - enemy.y) < 10
          ) {
            setScore((score) => score - 200);
            setHero({ x: 500, y: 500 });
          }
          return enemy;
        })
      );

      setEnemies2((enemies2) =>
        enemies2.map((enemy, index) => {
          if (
            Math.abs(hero.x - enemy.x) < 15 &&
            Math.abs(hero.y - enemy.y) < 10
          ) {
            setScore((score) => score - 200);
            setHero({ x: 500, y: 500 });
          }
          return enemy;
        })
      );
    };

    const intervalId = setInterval(() => {
      gameLoop();
    }, 99); // ajusta este valor para cambiar la velocidad de movimiento

    return () => clearInterval(intervalId); // liampia el intervalo cuando el componente se desmont
  }, [enemies, enemies2, bullets, hero]);
  const explosionTransitions = useTransition(explosionses, {
    from: { opacity: 1, transform: "scale(0.5)" },
    enter: { opacity: 1, transform: "scale(1)" },
    leave: { opacity: 0, transform: "scale(2)" },
    config: { duration: 1 },
  });
useEffect(() => {
  const intervalId = setInterval(() => {
    setEnemies((enemies) => [
      ...enemies,
      { x: Math.random() * containerRef.current.offsetWidth, y: 0 },
    ]);
  }, 10000); // Genera un nuevo enemigo cada 2 segundos

  return () => clearInterval(intervalId);
}, []);
  useEffect(() => {
    const handleKeyDown = (event) => {
      switch (event.keyCode) {
        case 37:
          if (hero.x > 10) setHero((hero) => ({ ...hero, x: hero.x - 10 }));
          break;
        case 39:
          if (hero.x <= 970) setHero((hero) => ({ ...hero, x: hero.x + 10 }));
          break;
        case 38:
          if (hero.y > 10) setHero((hero) => ({ ...hero, y: hero.y - 10 }));
          break;
        case 40:
          if (hero.y < 530) setHero((hero) => ({ ...hero, y: hero.y + 10 }));
          break;
        case 32:
          setBullets((bullets) => [
            ...bullets,
            { x: hero.x + 5, y: hero.y - 15 },
          ]);
          break;
        default:
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [hero]);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setExplosions((explosions) =>
        explosions.filter((_, index) => index !== 0)
      );
    }, 150); // Ajusta este valor para cambiar cuánto tiempo permanece la explosión en la pantalla

    return () => clearInterval(intervalId);
  }, []);
useEffect(() => {
  const gameLoop = () => {
    moveEnemies();
    setBullets((bullets) => {
      let newBullets = [...bullets];

      // Mueve las balas y detecta colisiones
      newBullets = newBullets
        .map((bullet) => {
          return { ...bullet, y: bullet.y - 5 }; // Mueve las balas hacia arriba
        })
        .filter((bullet) => {
          // Detecta colisiones con enemigos
          const hitEnemy = enemies1.some((enemy) =>
            checkCollision(bullet, enemy)
          );
          return !hitEnemy && bullet.y > 0; // Elimina las balas que han golpeado a un enemigo o que han sobrepasado el límite superior
        });

      // Elimina los enemigos golpeados
      setEnemies1((enemies) =>
        enemies.filter(
          (enemy) => !newBullets.some((bullet) => checkCollision(bullet, enemy))
        )
      );

      return newBullets;
    });
  };

  const intervalId = setInterval(gameLoop, 1000 / 60); // Ejecuta gameLoop 60 veces por segundo

  return () => clearInterval(intervalId); // Limpia el intervalo cuando el componente se desmonta
}, []);
useEffect(() => {
  const intervalId = setInterval(() => {
    // Añade un nuevo enemigo al estado enemies1
    setEnemies1((enemies1) => [
      ...enemies1,
      { x: Math.random() * window.innerWidth, y: 0 }, // Ajusta estos valores según tus necesidades
    ]);
  }, 0.1); // Genera un nuevo enemigo cada segundo

  return () => clearInterval(intervalId);
}, []);




return (
  <div id="content">
    <div id="container">

    <div id="hero" style={{ top: hero.y, left: hero.x }}></div>
      {enemies.map((enemy, index) => (
        <div
          key={index}
          className= "enemy"
          style={{
            position: 'absolute', // Asegura que el enemigo pueda ser posicionado correctamente
            top: enemy.y,
            left: enemy.x,
          }}
        ></div>
      ))}
    {explosionses.map((explosion, index) => (
      <div
        key={index}
        className="explosion"
        style={{ top: explosion.y, left: explosion.x }}
      />
    ))}
     <div ref={containerRef}>
    </div>
    {bullets.map((bullet, index) => (
      <div
        key={index}
        className="bullet"
        style={{ top: bullet.y, left: bullet.x }}
      ></div>
    ))}
    {explosionTransitions((style, item) => (
      <animated.img
        src={explosionGif}
        style={{
          ...style,
          left: item.x,
          top: item.y,
          position: "absolute",
          width: "100px",
          height: "100px",
        }}
      />
    ))}
  </div>
  <div id="score">{score}</div>
</div>
);
}

export default Abion;