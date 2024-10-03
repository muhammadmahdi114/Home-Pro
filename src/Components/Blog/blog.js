import React from "react";

const Blog = React.forwardRef((props, ref) => {
    return (
        <div ref={ref} className="bg-black h-screen pt-[80px]">
            Blog
        </div>
    );
})

export default Blog;