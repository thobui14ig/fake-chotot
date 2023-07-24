'use client'
import { useState } from 'react';
import './sing-up.scss';

export default function SingUp() {
    const [a, setA] = useState<Number>(0)

  return (
    <p onClick={() => alert(a)}>Dang nhap</p>
  )
}
