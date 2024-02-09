import { Profile } from "./profile/Profile";
import { Statistics } from "./statistics/Statistics";
import { FriendList } from "./friendList/FriendList";
import { TransactionHistory } from "./transactions/TransactionsHistory";
import user from '../data/user.json';
import data from '../data/data.json';
import friends from '../data/friends.json';
import transactions from '../data/transactions.json';

export const App = () => (<>
  <Profile user={user} />
  <Statistics title="Upload stats" stats={data} />
  <FriendList friends={friends} />
  <TransactionHistory items={ transactions} /> 
  </>
  );



 