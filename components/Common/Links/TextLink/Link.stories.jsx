import React from "react";
import Link from "./Link";

export default {
  title: "Example/Link",
  component: Link,
};

const Template = function (args) {
  return (
    <div>
      <Link href="#" {...args}>
        Normal link
      </Link>
    </div>
  );
};

/*eslint-disable */
export const LinkExample = Template.bind({});
LinkExample.args = {
  footerLink: false,
};
/* eslint-enable */
