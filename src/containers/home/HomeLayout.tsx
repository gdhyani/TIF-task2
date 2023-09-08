import {
    Container,
    Tabs,
    TabList,
    Tab,
    TabPanels,
    TabPanel,
    Heading,
    TabProps,
    Box,
    Grid,
} from "@chakra-ui/react";
import React, { useState } from "react";
import InterviewSettingsForm from "./InterviewSettingsForm";
import JobDetailsForm from "./JobDetailsForm";
import RequisitionForm from "./RequisitionDetailsForm";
import DisplayCard from "./PreviewCard";
import { PageNumbers } from "../../interface/home";
import { useFormik } from "formik";
import DataProvider from "./DataProvider";

const CustomTab: React.FC<TabProps> = ({ children, ...props }) => {
    return (
        <Tab p="1rem" fontFamily="Poppins" {...props}>
            {children}
        </Tab>
    );
};

const HomeLayout = () => {
    const [page, setPage] = useState<PageNumbers>(0);
    const [dataR, setDataR] = useState("");

    const handlePage = (pageNumber: PageNumbers) => {
        setPage(pageNumber);
    };
    function handleChange(data:any){
      setDataR(data);
      console.log("dataR");
    }

    return (
        <Box w="100%">
            <Container maxW="1200px">
                <Heading fontFamily="Poppins" fontSize="1.5rem" my="2rem">
                    Create Candidate Requisition
                </Heading>
                <Tabs index={page} isLazy lazyBehavior="keepMounted">
                    <TabList>
                        <CustomTab>Requistion Details</CustomTab>
                        <CustomTab>Job Details</CustomTab>
                        <CustomTab>Interview Settings</CustomTab>
                    </TabList>
                    <Grid
                        display="grid"
                        gridTemplateColumns="3fr 2fr"
                        gap="24px"
                    >
                        <TabPanels>
                            <TabPanel>
                                <RequisitionForm handleTab={handlePage} />
                            </TabPanel>
                            <TabPanel> 
                                <JobDetailsForm handleTab={handlePage} />
                            </TabPanel>
                            <TabPanel>
                                <InterviewSettingsForm handleTab={handlePage} />
                            </TabPanel>
                        </TabPanels>
                        <DisplayCard
                            requisitionDetails={{
                                requisitionTitle: "",
                                gender: "0",
                                noOfOpenings: 4,
                                urgency: "0",
                            }}
                            jobDetails={{
                                jobDetails: "",
                                jobLocation: "",
                                jobTitle: "",
                            }}
                            interviewSettings={{
                                interviewDuration: "",
                                interviewLanguage: "",
                                interviewMode: "",
                            }}
                        />
                    </Grid>
                </Tabs>
            </Container>
        </Box>
    );
};

export default HomeLayout;
