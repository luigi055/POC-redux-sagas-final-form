import IBook from "../../../models/book/interface";

export default interface Props {
  onSubmit: (values: IBook) => void;
}
