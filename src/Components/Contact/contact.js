import React from "react";

const Contact = React.forwardRef((props, ref) => {
    return (
        <div ref={ref} className="bg-black h-screen pt-[80px]">
            Contact
        </div>
    );
})

export default Contact;