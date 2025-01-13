import React from "react";

const Aside = () => {
  return <div className="max-xl:hidden">Aside</div>;
};

// kapsayıcı bileşendeki user state' i değiştiğinde gereksiz render olmasının önüne geçtik
export default React.memo(Aside);
