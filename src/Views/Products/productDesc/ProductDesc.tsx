import { Text, Grid, GridItem, Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react';
import React from 'react';
import { RootStateOrAny, useSelector } from 'react-redux';
import ReactHtmlParser from 'react-html-parser';
interface ProductDescProps { }

const ProductDesc: React.FC<ProductDescProps> = () => {
    const ProductDetail = useSelector((state: RootStateOrAny) => state.ProductTop.Product)

    return (
        <Grid backgroundColor="#FAFAFB" m="100px 50px 0px" templateColumns="repeat(1,1fr)">
            <GridItem colSpan={1}>
                <Tabs>
                    <TabList>
                        <Tab>Product Information</Tab>
                        <Tab>Reviews</Tab>
                    </TabList>
                    <TabPanels>
                        <TabPanel>
                            {ReactHtmlParser(ProductDetail?.description)}
                        </TabPanel>
                        <TabPanel>
                            <Text textAlign="justify" fontSize="12px">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam culpa sint debitis commodi quibusdam. Ea asperiores doloremque quis aliquid quam explicabo veritatis voluptatibus. Animi suscipit eligendi, reiciendis nulla nihil repellendus consequuntur tempora aperiam, perferendis exercitationem fuga ab eius atque consequatur! Eius quod atque doloribus, debitis dolore veritatis numquam? Quod optio, eveniet quo reiciendis labore eius, qui aut nihil impedit, enim quibusdam. Maiores sunt, explicabo eius obcaecati rerum numquam fugiat sit incidunt nemo aspernatur corrupti quas magnam perferendis, quo voluptatem atque repellat, labore eveniet voluptatibus nam mollitia culpa provident. Placeat expedita similique autem magnam eligendi eius natus laudantium obcaecati recusandae accusamus!
                            </Text>
                        </TabPanel>
                    </TabPanels>
                </Tabs>
            </GridItem>
        </Grid>
    );
};

export default ProductDesc;