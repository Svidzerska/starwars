import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import "./showDetails.scss";

import foto1 from "../../../images/people/1.jpg";
import foto2 from "../../../images/people/2.jpg";
import foto3 from "../../../images/people/3.jpg";
import foto4 from "../../../images/people/4.jpg";
import foto5 from "../../../images/people/5.jpg";
import foto6 from "../../../images/people/6.jpg";
import foto7 from "../../../images/people/7.jpg";
import foto8 from "../../../images/people/8.jpg";
import foto9 from "../../../images/people/9.jpg";
import foto0 from "../../../images/people/10.jpg";

import { useAppSelector, useAppDispatch } from "../../../app/hooks";

import { getEntity } from "../../../features/products/productsSlice";
import WaitScreen from "../../utilityComponents/waitScreen/WaitScreen";
import Property from "./renderSection/Property";

interface Props {
  parentBlock: string;
}

const ShowDetails: React.FC<Props> = ({ parentBlock }): JSX.Element => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const entity: {
    data: any | null; //any?
    isPending: boolean;
    error: string | null;
  } = useAppSelector((state) => state.products.entity);

  const [propertiesName, setPropertiesName] = useState<string[]>([]);

  const { entityId } = useParams();

  const fotoArray = [foto0, foto1, foto2, foto3, foto4, foto5, foto6, foto7, foto8, foto9];
  const fotoRandom = Math.floor(Math.random() * 10);

  useEffect(() => {
    dispatch(getEntity(`https://swapi.dev/api/${parentBlock}/${entityId}`));
  }, []);

  useEffect(() => {
    entity.data && setPropertiesName(Object.keys(entity.data));
  }, [entity]);

  return (
    <>
      {entity.isPending ? (
        <WaitScreen />
      ) : (
        <>
          <header className="entity_header">
            <button onClick={() => navigate(-1)}>Back to {parentBlock}</button>
            <button></button>
          </header>
          {parentBlock === "starships" ? (
            <main className="entity_main">
              <img src={fotoArray[fotoRandom]} alt="" />
              <h1>{entity.data?.name}</h1>

              <section>
                <h2 className="category_name">{"Who is it?"}</h2>
                {propertiesName.map(
                  (property: string, index: number) =>
                    index >= 1 && index <= 3 && <Property property={property} entity={entity} />
                )}
              </section>

              <section>
                <h2 className="category_name">{"Physical characteristics"}</h2>
                {propertiesName.map(
                  (property: string, index: number) =>
                    index >= 4 && index <= 11 && <Property property={property} entity={entity} />
                )}
              </section>

              <section>
                <h2 className="category_name">{"Class of starships"}</h2>
                {propertiesName.map(
                  (property: string, index: number) => index === 12 && <Property property={property} entity={entity} />
                )}
              </section>
            </main>
          ) : (
            <main className="entity_main">
              <img src={fotoArray[fotoRandom]} alt="" />
              <h1>{entity.data?.name}</h1>

              <section>
                <h2 className="category_name">{"Physical details"}</h2>
                {propertiesName.map(
                  (property: string, index: number) =>
                    index >= 1 && index <= 5 && <Property property={property} entity={entity} />
                )}
              </section>

              <section>
                <h2 className="category_name">{"Who is it?"}</h2>
                {propertiesName.map(
                  (property: string, index: number) =>
                    index >= 6 && index <= 7 && <Property property={property} entity={entity} />
                )}
              </section>
            </main>
          )}
        </>
      )}
    </>
  );
};

export default ShowDetails;
function useHistory() {
  throw new Error("Function not implemented.");
}
