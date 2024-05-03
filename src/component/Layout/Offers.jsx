import React from "react";
import Container from "./Container";
import Flex from "./Flex";
import Image from "./Image";

function Offers() {
  return (
    <section className="mt-[140px]">
      <Container>
        <Flex className="gap-4 justify-between">
          <div>
            <Image src="Ad_1.png" alt="add_1" />
          </div>
          <div className=" flex flex-col  gap-9">
            <div>
              <Image src="Ad_2.png" alt="add_2" />
            </div>
            <div>
              <Image src="Ad_2.png" alt="add_2" />
            </div>
          </div>
        </Flex>
      </Container>
    </section>
  );
}

export default Offers;
