import React from "react";

type Props = {
  imageUrl: string;
  intro: string;
};

const HomeBanner: React.FC<Props> = ({ imageUrl, intro }) => (
  <div className="mb-8">
    {imageUrl && <img src={imageUrl} alt="Banner" className="w-full rounded-md" />}
    <div
      className="mt-4 prose"
      dangerouslySetInnerHTML={{ __html: intro }}
    />
  </div>
);

export default HomeBanner; 