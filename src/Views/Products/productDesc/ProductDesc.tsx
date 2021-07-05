import { Text, Grid, GridItem, Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react';
import React from 'react';

interface ProductDescProps {

}

const ProductDesc: React.FC<ProductDescProps> = () => {
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
                            <Text textAlign="justify" fontSize="12px">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, sapiente voluptas consequuntur tenetur voluptatibus non deleniti cumque! Commodi, voluptate dicta non, nisi nihil eveniet sequi ducimus itaque molestiae nobis optio in odit quidem quia quas similique. Tempore fuga ipsa magni eveniet culpa iure natus fugit assumenda velit officia quasi expedita labore maxime quas iusto doloremque quisquam ullam, consectetur quo esse ipsam blanditiis temporibus. Laudantium veniam fugit voluptatibus iure iusto odio quaerat similique deleniti, vel sequi voluptates beatae aut voluptatem. Magnam veniam cumque laborum laboriosam beatae soluta quaerat ratione rerum nam quidem, distinctio molestiae quos porro, sapiente impedit accusamus voluptatibus nesciunt!
                            </Text>
                            <Text mt={2} textAlign="justify" fontSize="12px">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta debitis omnis, tempore hic suscipit quod ad harum consequatur inventore, et voluptas ipsa quam quibusdam consequuntur, porro adipisci. Delectus doloribus accusamus incidunt nesciunt ex aperiam temporibus provident sapiente laboriosam officia facere eos maiores culpa quod consequatur minima, recusandae inventore dicta eius.
                            </Text>
                            <Text mt={2} textAlign="justify" fontSize="12px">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, sapiente voluptas consequuntur tenetur voluptatibus non deleniti cumque! Commodi, voluptate dicta non, nisi nihil eveniet sequi ducimus itaque molestiae nobis optio in odit quidem quia quas similique. Tempore fuga ipsa magni eveniet culpa iure natus fugit assumenda velit officia quasi expedita labore maxime quas iusto doloremque quisquam ullam, consectetur quo esse ipsam blanditiis temporibus. Laudantium veniam fugit voluptatibus iure iusto odio quaerat similique deleniti, vel sequi voluptates beatae aut voluptatem. Magnam veniam cumque laborum laboriosam beatae soluta quaerat ratione rerum nam quidem, distinctio molestiae quos porro, sapiente impedit accusamus voluptatibus nesciunt!
                            </Text>
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