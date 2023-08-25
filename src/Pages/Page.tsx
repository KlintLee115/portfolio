import React from "react";
import { Blogs } from "../Blogs/Blogs";
import Projects from "../Projects/Projects";

enum PageOptions {
    Projects, Blogs
}

interface PageProps {
    pageChoice: PageOptions;
}

function Page(props: PageProps) {
    return props.pageChoice === PageOptions.Projects ? <Projects /> : <Blogs />;
}

export { Page, PageOptions };
