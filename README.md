# README


SplitDice is a clone of SplitWise - a simple app to keep track of your shared expense and balance with housemate, trips, groups, friends, and family. Our algorithm provides best solution to split the expenses fairly by the least transactions.

*[SplitDice Deployed on Heroku](https://splitdice.herokuapp.com/#/)

*[Splitwise](https://https://secure.splitwise.com/)

## Features 
* User authentication & account creation
* Friending functionality + friends Search + user Search
* Bill Create
* Bill settle Algorithm behind Bill splitting involved multi-relation



# Splitdice
SplitDice is a clone of SplitWise - a simple app to keep track of your shared expense and balance with housemate, trips, groups, friends, and family. Our algorithm provides optimum solution to split the expenses fairly by the least transactions.

## Come for a visit at https://splitdice.herokuapp.com/#/

## Technologies Used

* Ruby
* Rails
* Javascript
* React-Redux
* React
* Heroku
* CSS
* HTML
* SASS
* Webpack

## Features

### Friend and Friend Search Feature
When logged in, a user can view/add friends directly on the dashboard page. Once added, the friend can instantly be added. This was accomplished utilizing two React components, a friend display component and a friend form component. The friend display component displays all your friends.

![splitdiceFriendTest](https://user-images.githubusercontent.com/72528915/128723948-7731b701-d15b-41d1-a0b0-86ea7f2e7b10.gif)

### Friend and Friend search Code Snippet
Code that maps through all adaquate users and avoid current friends to be in the search list for friending.
```js
   
    let searchData;
    let currentFriends = [];
    this.props.friends.map(ele => {
      currentFriends.push(ele.username)
    });
    
    searchData = this.state.searchList.map((el, idx) => {
        if(!currentFriends.includes(el.username)) {
            return (<li key={idx} onClick={this.chooseUser}> {el.username} </li>);
        }
    })
    
  ```


### Bill Feature
User can create bills and split bills with multiple friends. The algo implemented can aggregate all bills and separate into Owe hash and Owed hash and then offset all possible payments in order to reduce user operating cost for a better experience. 

![splitdiceBill](https://user-images.githubusercontent.com/72528915/128729862-e27e0baa-eac8-45c8-a902-fdedada95cb4.gif)

### Search Code Snippet
Code that offsets payments
```ruby
    ########Bills Logic########

    def net_payments(current_user_id)
        payments_hash = {"owed" => {}, "owe" => {}}
        
        owe_hash = owe(current_user_id)
        owed_hash = owed(current_user_id)
        user_payments = (owe_hash.keys + owed_hash.keys).uniq
        user_payments.each do |user|
        # user is in owe_hash and NOT owed_hash
          if owe_hash.has_key?(user) && !owed_hash.has_key?(user)
            payments_hash["owe"][user] = owe_hash[user]
        # user is NOT in owe_hash and in owed_hash
          elsif !owe_hash.has_key?(user) && owed_hash.has_key?(user)
            payments_hash["owed"][user] = owed_hash[user]
        # user is in both owe hash and owed hash
          else
                amount = (owed_hash[user] - owe_hash[user]).round(2)
                if amount > 0
                    # Goes to you are owed
                    payments_hash["owed"][user] = amount
        
                elsif amount < 0
                    payments_hash["owe"][user] = -amount
                    # Goes to you owe
                end
            end 
        end
        payments_hash
    end
```

### Modals, Modals, Modals
Much akin to Splitwise, splitdice utilizes many modals to aid in user experience. Whether it is for add a friend, creating  a bill, or settle payments, modals are a lovely tool to keep users engage and cut down on problems. Utilizing Redux to set the present modal to a ui slice of state and then using a JS switch statement to detect which modal is open, then setting the necessary React component to render.

![splitdiceModal](https://user-images.githubusercontent.com/72528915/128732595-450d4c6e-f696-4332-b9e9-2a04f70461f3.gif)


### Modals Code Snippet
Code that uses a JS switch statement to see which modal is active, then display that React component in modal form. If no modal is active, no modal will display.
```js
  function Modal({modal, closeModal}) {
  if (!modal) {
    return null;
  }
  let component;
  switch (modal) {
    case 'addFriend':
      component = <Friendship_container />;
      break;
    case 'addBill':
      component = <Bill_form_container />;
      break;
    case 'settle':
      component = <Settle_form_container />;
      break;
    default:
      return null;
  }
  return (
    <div className="modal-background" onClick={closeModal}>
      <div className="modal-child" onClick={e => e.stopPropagation()}>
        { component }
      </div>
    </div>
  );
}

```
