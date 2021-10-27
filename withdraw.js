function Withdraw(){
  const ctx = React.useContext(UserContext);
  return (
    <h1>Withdrawal<br/>
        {JSON.stringify(ctx)}
    </h1>
  );
}
