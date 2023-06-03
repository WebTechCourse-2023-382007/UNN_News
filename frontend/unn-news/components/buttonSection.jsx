import { useState } from 'react';

export default function ButtonSection({ section, onClick, className }) {

    return (
        <button id={section.id} onClick={onClick} className={className} href={section.sectionRef}>{section.title}</button>
    )
}