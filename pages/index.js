import MeetupList from "../components/meetups/MeetupList"

const DUMMY_MEETUPS = [
    {
        id: "m1",
        title: "A first meetup",
        image: "https://images.unsplash.com/photo-1515963665762-77ef90e624fa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
        address: "Some address 5, 12345 Some City",
        description: "This is a first meetup!"
    },
    {
        id: "m1",
        title: "A second meetup",
        image: "https://images.unsplash.com/photo-1582760548598-0bccdf815aa2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        address: "Some address 6, 12345 Some City",
        description: "This is a second meetup!"
    },
]

function HomePage() {

    return <MeetupList meetups={DUMMY_MEETUPS}/>
    
}

export default HomePage