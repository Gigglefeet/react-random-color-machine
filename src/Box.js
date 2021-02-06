import React from 'react';
export default function Box(props) {
  return (
    <div
      style={{
        width: `${props.width ? props.width : '50vw'}`,
        height: '100px',
        backgroundColor: `${props.background}`,
        borderRadius: '0%',
        left: '1000px',
        margin: '0 auto',
      }}
    >
      {props.text}
    </div>
  );
}
