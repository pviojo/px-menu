import React, { useState } from "react";
import numeral from "numeral";
import numerales from "numeral/locales/es"; //eslint-disable-line
import Button from "../../Button";

import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import styles from "./index.module.scss";
const Item = ({ item, editable }) => {
  numeral.locale("es");
  const [active, setActive] = useState(false);
  const [title, setTitle] = useState(item.title);
  const [price, setPrice] = useState(item.price);
  const [description, setDescription] = useState(item.description);

  return (
    <div
      className={`${styles.item} ${editable && active && styles.active}`}
      onMouseOver={() => setActive(true)}
      onMouseOut={() => setActive(false)}
    >
      {editable ? (
        <>
          <input
            className={styles.title}
            type="text"
            placeholder="Producto..."
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            onFocus={() => setActive(true)}
            onBlur={() => setActive(false)}
          />
          <input
            className={styles.price}
            type="text"
            placeholder="Precio..."
            onChange={(e) => setPrice(e.target.value)}
            value={price}
            onFocus={() => setActive(true)}
            onBlur={() => setActive(false)}
          />
          <textarea
            className={styles.description}
            placeholder="Descripción..."
            onChange={(e) => setDescription(e.target.value)}
            value={description}
            onFocus={() => setActive(true)}
            onBlur={() => setActive(false)}
          />
          <div className={styles.actions}>
            <Button type="secondary" size="small" icon={faTrashAlt}></Button>
          </div>
        </>
      ) : (
        <>
          <div className={styles.title}>{title}</div>
          <div className={styles.price}>{numeral(price).format("$0,00")}</div>
          {description && (
            <div className={styles.description}>{description}</div>
          )}
        </>
      )}
    </div>
  );
};

export default Item;
