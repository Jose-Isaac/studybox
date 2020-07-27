import React from 'react';
import './Button.css';

export default function Button(props) {
  return (
    <a className={props.className} href={props.href}>
      {props.children}
    </a>
  );
}