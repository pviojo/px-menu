import React, { useState, useEffect } from "react";

import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

import Button from "../Button";

import Item from "./Item";

import styles from "./index.module.scss";
const MenuEditor = ({ sections, editable }) => {
  const [stSections, setStSections] = useState(sections);

  return stSections.map((section, index) => (
    <div
      className={`${styles.section} ${editable && styles.editable}`}
      key={index}
    >
      <div className={styles.name}>
        {editable ? (
          <input
            className={styles.input}
            type="text"
            value={section.name}
            placeholder="Sección..."
          />
        ) : (
          section.name
        )}
        {editable && (
          <div className={styles.actions}>
            <Button type="secondary" size="small" icon={faTrashAlt}></Button>
          </div>
        )}
      </div>
      <div className={styles.items}>
        {section.items.map((item, index2) => (
          <>
            <div className={styles.item}>
              <Item item={item} editable={editable} />
            </div>
          </>
        ))}
      </div>
    </div>
  ));
};

export default MenuEditor;
