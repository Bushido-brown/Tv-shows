import commentDataMock from '../modules/commentDataMock.js';

beforeAll(() => {
  document.body.innerHTML = '<div class=\'commentsWrapper\'></div>';
});

test('The commentData function returns the total number of comments in the details pop-up', () => {
  // Arrange
  const commentSection = document.querySelector('.commentsWrapper');
  commentSection.innerHTML = `<p>2022-05-18---&gt; jose :  test2</p>
  <p>2022-05-18---&gt; test</p>
  <p>2022-05-18---&gt; test</p>
  <p>2022-05-18---&gt; test</p>
  <p>2022-05-18---&gt; test</p> 
  <p>2022-05-18---&gt; test</p>
  <p>2022-05-18---&gt; test</p>`;

  // Add
  const numberOfItems = document.querySelectorAll('p');
  const objLength = commentDataMock();

  // Assert
  expect(numberOfItems.length).toBe(objLength);
});
