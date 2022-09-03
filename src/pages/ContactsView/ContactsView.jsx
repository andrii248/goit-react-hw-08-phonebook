import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';
import ContactForm from 'components/ContactForm';
import css from './ContactsView.module.css';

export default function ContactsView() {
  return (
    <main className={css.contacts}>
      <div className={css.list}>
        <Filter />
        <ContactList />
      </div>
      <ContactForm />
    </main>
  );
}
