export default class NoteModel {
  id: string;
  title: string;
  content?: string;
  listItems?: string[];
  savedDate: Date;

  constructor(props: {
    id: string
    title: string,
    content?: string,
    listItems?: string[],
    savedDate: Date
  }) {
    this.id = props.id;
    this.title = props.title;
    this.content = props.content;
    this.listItems = props.listItems;
    this.savedDate = props.savedDate;
  }
}
