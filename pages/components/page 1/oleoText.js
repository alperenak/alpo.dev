import React, { useState, useEffect } from "react"

export default function OleoText({ title = "", secondTitle = "", position = "left" }) {
    return (
        <div className={`home-text ${position}`}>
           {title}
        </div>
    )
}