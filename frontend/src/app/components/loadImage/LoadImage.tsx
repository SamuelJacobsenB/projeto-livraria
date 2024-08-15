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

    useEffect((): void=>{
        setLoading(true);
    }, []);

    return (
        <div className="image_container">
            <Image 
                src={props.src}
                alt={props.alt}
                width={loading ? 0 : props.width}
                height={loading ? 0 : props.height}
                onLoad={()=>setLoading(false)}
                quality={75}
                className={props.className}
            />
            {loading && <Loader/> }
        </div>
    );
};
//------------------------------------------------------
export default LoadImage;