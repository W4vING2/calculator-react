import ButtonsRow from "../ButtonsRow/ButtonsRow.jsx";

export default function ButtonsPack(props){
  return (
    <>
      <ButtonsRow
        itemsColor="gray"
        itemTitles={['C', 'x', '%', '/']}
        onClick={props.onClick}
      />
      <ButtonsRow
        itemsColor="dark"
        itemTitles={['7', '8', '9', 'X']}
        onClick={props.onClick}
      />
      <ButtonsRow
        itemsColor="dark"
        itemTitles={['4', '5', '6', '-']}
        onClick={props.onClick}
      />
      <ButtonsRow
        itemsColor="dark"
        itemTitles={['1', '2', '3', '+']}
        onClick={props.onClick}
      />
      <ButtonsRow
        itemsColor="dark"
        itemTitles={['.', '0', '00', '=']}
        onClick={props.onClick}
      />
    </>
  )
}