
import './App.css';

import Button from './button/Button'
import Label from './label/Label'

function App() {
  return (
    <div className="App">
      <h1 className="title">React Button Component</h1>

      <section className="wrapper">
        <div className="row">
          <article className="container">
            <Label text="<Button />" />
            <Button />
          </article>

          <article className="container">
            <Label text="<Button variant='outline' />" />
            <Button variant="outline"/>
          </article>

          <article className="container">
            <Label text="<Button variant='text' />" />
            <Button variant="text"/>
          </article>
        </div>
        
      <div className="row">
        <article className="container">
          <Label text="<Button disabledShadow />" />
          <Button disableShadow />
        </article>

        <article className="container">
          <Label text="<Button disabled />" />
          <Button disabled />
        </article>

        <article className="container">
          <Label text="<Button disabled variant='text' />" />
          <Button disabled  variant="text" />
        </article>
      </div>
        
      <div className="row">
        <article className="container">
          <Label text="<Button color='default' />" />
          <Button color="default" />
        </article>

        <article className="container">
          <Label text="<Button color='primary' />" />
          <Button color="primary" />
        </article>

        <article className="container">
          <Label text="<Button color='secondary' />" />
          <Button color="secondary" />
        </article>

        <article className="container">
          <Label text="<Button color='danger' />" />
          <Button color="danger" />
        </article>
      </div>

      <div className="row">
        <article className="container">
          <Label text="<Button size='sm' />" />
          <Button size="sm" color="primary" />
        </article>

        <article className="container">
          <Label text="<Button size='md' />" />
          <Button size="md" color="primary" />
        </article>

        <article className="container">
          <Label text="<Button size='lg' />" />
          <Button size="lg" color="primary" />
        </article>
      </div>

      <div className="row">
        <article className="container">
            <Label text="<Button startIcon='add_shopping_cart' />" />
            <Button startIcon="add_shopping_cart" />
        </article>

        <article className="container">
            <Label text="<Button endIcon='add_shopping_cart' />" />
            <Button endIcon="add_shopping_cart" />
        </article>
      </div>

      </section>
    </div>
  );
}

export default App;
