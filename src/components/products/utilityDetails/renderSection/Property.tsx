import React from "react";

interface Props {
  property: string;
  entity: any;
}

const Property: React.FC<Props> = ({ property, entity }): JSX.Element => {
  return (
    <p key={property}>
      <span className="propertyName">{property}: </span>
      <span>{entity.data && entity.data[property]}</span>
    </p>
  );
};

export default Property;
