'use client'
import CoursesDetailsPage from "../../components/Course/CoursesDetailsPage"

const Page = ({params} :any) => {
    return(
        <div>
            <CoursesDetailsPage id={params.id} />
        </div>
    )
}

export default Page