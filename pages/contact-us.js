import React from 'react';
import Link from 'next/link';

const ContactUs = () => {
    return (
        <div>
            <p>Contact us page</p>
            <Link href="/about">
                <a>Click here for About us page</a>
            </Link>
        </div>
    );
};

export default ContactUs;