import React from "react";
import "./styles.css";

import MenuEditor from "./components/MenuEditor";

import styles from "./index.module.scss";

export default function App() {
  const sections = [
    {
      name: "Entradas",
      items: [
        {
          title: "Machas a la parmesana",
          price: 6000
        },
        {
          title: "Provoleta",
          price: 5000
        },
        {
          title: "Palta Reina",
          price: 4500
        }
      ]
    },
    {
      name: "Pescados",
      items: [
        {
          title: "Merluza Austral a la plancha",
          description:
            "Merluza a la plancha, crema de puerros y zanahorias glaseadas al vapor",
          price: 7800
        },
        {
          title: "Reineta a la plancha",
          price: 5000
        },
        {
          title: "Caldillo de Congrio",
          description: "El típico",
          price: 4500
        }
      ]
    },
    {
      name: "Pastas",
      items: [
        {
          title: "Fetuccini di Mare",
          description: "Fetuccini con salsa de camarones",
          price: 9400
        },
        {
          title: "Tagliatelle al pomodoro",
          description: "El de la nonna",
          price: 9400
        }
      ]
    }
  ];
  return (
    <div className="App">
      <img
        alt="Peixe"
        src="data:image/png;base64,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"
        className={styles.logo}
      />

      <MenuEditor sections={sections} />
      <div className={styles.footer}>
        Auspiciado por{" "}
        <img
          alt="Peixe"
          src="//production-cdn.needish.com/assets/images/peixe-green.svg"
          className={styles.peixeLogo}
        />
      </div>
    </div>
  );
}
