import TicketCard from "../components/TicketCard";

const Dashboard = () => {
  const tickets = [
    {
      category: 'Q1 2023',
      color: 'blue',
      title: 'Study Progress so far',
      owner: 'Felix Petzsche',
      avatar: 'https://avatars.githubusercontent.com/u/1591804?v=4',
      status: 'in Progress',
      priority: 5,
      progress: 40,
      description: 'Keep track of coding study progress in 2023 so far.',
      timestamp: '2023-06-16T16:27:45-0400'
    },
    {
      category: 'Q2 2023',
      color: 'purple',
      title: 'React project Guide',
      owner: 'Felix Petzsche',
      avatar: 'https://avatars.githubusercontent.com/u/1591804?v=4',
      status: 'need to start on it',
      priority: 8,
      progress: 0,
      description: 'Create a react project guide for new apps to be developed.',
      timestamp: '2023-06-19T13:32:14-0400'
    },
    {
      category: 'Q1 2023',
      color: 'blue',
      title: 'Completed Projects this Year',
      owner: 'Felix Petzsche',
      avatar: 'https://avatars.githubusercontent.com/u/1591804?v=4',
      status: 'in Progress',
      priority: 3,
      progress: 20,
      description: 'Tracking record of completed projects this year so far',
      timestamp: '2023-06-14T13:57:26-0400'
    }
  ]

  const uniqueCategories = [
    ...new Set(tickets?.map(({ category }) => category))
  ]

  console.log(uniqueCategories)

  return (
    <div className="dashboard">
      <h1>My Projects</h1>
      <div className="ticket-container">

        {tickets && uniqueCategories?.map((uniqueCategory, categoryIndex) => (
          <div key={categoryIndex}>
            <h3>{uniqueCategory}</h3>
            {tickets.filter(ticket => ticket.category === uniqueCategory)
              .map((filteredTicket, _index) => (
                <TicketCard
                  id={_index}
                  color={filteredTicket.color}
                  ticket={filteredTicket}
                />
              ))
            }
          </div>
        ))}

      </div>
    </div>
  )
};

export default Dashboard;