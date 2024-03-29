//Chakra ui
import { Flex, Text } from "@chakra-ui/react";
//Chakra ui
import { BodyText, HeadingS } from "../../../../../styles/Typography";

import { useGetInvoicesQuery } from "../../../../../features/api/invoicesApi";

import { useParams } from "react-router-dom";

import { InvoiceItem } from "../../../../../types/types";

const InvoiceBody = () => {
  const { data: invoices } = useGetInvoicesQuery();
  console.log(invoices);
  const { id } = useParams();

  return (
    <>
      {invoices
        ?.filter((item: InvoiceItem) => item._id === id)
        .map(
          ({
            invoiceDate,
            _id,
            clientEmail,
            clientName,
            paymentTerms,
            projectDesc,
            streetAddress,
            city,
            postCode,
            country,
          }) => (
            <Flex
              width={{ base: "100%" }}
              height={{ base: "100%" }}
              padding={{ base: "mobile.24" }}
              flexDir={{ base: "column" }}
              key={_id}
            >
              {/* Invoice number */}
              <Flex
                flexDir={{ base: "column" }}
                marginBottom={{ base: "30px" }}
              >
                <Text {...HeadingS}>#{_id.slice(0, 5).toUpperCase()}</Text>
                <Text>{projectDesc}</Text>
              </Flex>
              {/* Invoice number */}

              {/* Invoice address */}
              <Flex width={{ base: "30%" }} marginBottom={{ base: "1.875rem" }}>
                <Text {...BodyText} color="color.6">
                  19 Union Terrace London E1 3EZ United Kingdom
                </Text>
              </Flex>
              {/* Invoice address */}

              {/* Invoice Date */}
              <Flex width={{ base: "100%" }}>
                <Flex width={{ base: "100%" }} flexDir={{ base: "column" }}>
                  {/* Invoice Date */}
                  <Flex flexDir={{ base: "column" }}>
                    <Text
                      {...BodyText}
                      color="color.7"
                      marginBottom={{ base: ".8125rem" }}
                    >
                      Invoice Date
                    </Text>
                    <Text {...HeadingS} marginBottom={{ base: "1.875rem" }}>
                      {invoiceDate}
                    </Text>
                  </Flex>
                  {/* Invoice Date */}

                  {/* Payment Due */}
                  <Flex flexDir={{ base: "column" }}>
                    <Text
                      {...BodyText}
                      color="color.7"
                      marginBottom={{ base: ".8125rem" }}
                    >
                      Payment Due
                    </Text>
                    <Text {...HeadingS} marginBottom={{ base: "1.875rem" }}>
                      {paymentTerms}
                    </Text>
                  </Flex>
                  {/* Payment Due */}

                  {/* Sent to */}
                  <Flex flexDir={{ base: "column" }}>
                    <Text
                      {...BodyText}
                      color="color.7"
                      marginBottom={{ base: ".8125rem" }}
                    >
                      Sent to
                    </Text>
                    <Text {...HeadingS}>{clientEmail}</Text>
                  </Flex>
                  {/* Sent to */}
                </Flex>
                <Flex width={{ base: "60%" }} flexDir={{ base: "column" }}>
                  <Flex flexDir={{ base: "column" }}>
                    <Text
                      {...BodyText}
                      color="color.7"
                      marginBottom={{ base: ".8125rem" }}
                    >
                      Bill to
                    </Text>
                    <Text {...HeadingS}>{clientName}</Text>
                    <Flex color="color.7" flexDir={{ base: "column" }}>
                      <Text {...BodyText}> {streetAddress}</Text>
                      <Text {...BodyText}> {city}</Text>
                      <Text {...BodyText}> {postCode}</Text>
                      <Text {...BodyText}> {country}</Text>
                    </Flex>
                  </Flex>
                </Flex>
              </Flex>
              {/* Invoice Date */}
              <Flex></Flex>
            </Flex>
          )
        )}
    </>
  );
};

export default InvoiceBody;
