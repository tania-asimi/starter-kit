import React from "react";
import Link from "next/link";
import Image from "next/image";

const About = () => {
    return (
        <div>
            <p>About page</p>
            <Link href="/contact-us">
                <a>Click here for Contact us page</a>
            </Link>
            <Image
                src="/my-image.svg"
                alt="Next.js is awesome"
                width={500}
                height={500}
            />
        </div>
    );
};

export default About;