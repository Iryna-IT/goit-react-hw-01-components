import user from '../data/user.json';
import statData from '../data/statistica-data.json';
import friends from '../data/friends.json';
import transactionsData from '../data/transactions.json';


import Profile from './Profile/Profile';
import Statistics from './Statistics/Statistics';
import FriendsList from './FriendsList/FriendsList';
import TransactionHisory from './TransactionHistory/TransactionHistory'

const App = () => (
  <div className="App">
    <Profile name={user.name} tag={user.tag} location={user.location} avatar={user.avatar} stats={user.stats}/>
    <Statistics title="Upload stats" stats={statData} />;
    <FriendsList friends={friends}/>
    <TransactionHisory items = {transactionsData} />
  </div>
);

export default App;
