"use client";
//------------------------------------------------------
import { useEffect, useState } from "react";
//------------------------------------------------------
import Image from "next/image";
//------------------------------------------------------
import Loader from "../loader/Loader";
//------------------------------------------------------
import ImageProps from "@/types/ImageProps";
//------------------------------------------------------
const LoadImage = (props: ImageProps) => {
    const [ loading, setLoading ] = useState<boolean>();
    const [ display, setDisplay ] = useState<string>();

    useEffect(()=>{
        setLoading(true);
        setDisplay('none');
    }, [])

    return (
        <div className="image-container">
            <Image 
                src={props.src}
                alt={props.alt}
                width={props.width}
                height={props.height}
                onLoad={()=>{setLoading(false); setDisplay('block');}}
                style={{display: display}}
                quality={75}
            />
            {loading && <Loader/> }
        </div>
    );
};
//------------------------------------------------------
export default LoadImage;