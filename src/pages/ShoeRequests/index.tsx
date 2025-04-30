import { useState } from "react";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import Page from "../../components/Page";
import { useUserBookForms } from "../../hooks/useUserBookForms";
import RequestsTable from "./RequestsTable";

const ShoeRequests = () => {
    const [ page, setPage ] = useState(0);
    const [ rows, setRows ] = useState(10);

    const { bookForms, count } = useUserBookForms({ page, rows });

    const handlePageChange = (_:React.MouseEvent<HTMLButtonElement> | null, newPage:number) : void => {
       setPage(newPage);
    }
    const handleRowsChange = (e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) : void => {
        setRows(Number.parseInt(e.target.value, 10));
        setPage(0);
    }

    return (
        <>
            <Page>
                <Navbar>
                    <RequestsTable 
                        handlePageChange={handlePageChange}
                        handleRowsChange={handleRowsChange}
                        page={page} 
                        count={count}
                        rows={rows} 
                        bookForms={bookForms} 
                    />
                </Navbar>
            </Page>
            <Footer />
        </>
    )
}

export default ShoeRequests;