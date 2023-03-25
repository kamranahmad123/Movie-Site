const myCommentCount = require('./countComments.js');

describe('myCommentCount', () => {
  let commentCountMock;
  let fetchMock;

  beforeEach(() => {
    commentCountMock = {
      innerText: '',
    };

    fetchMock = jest.fn(() => Promise.resolve({
      json: () => Promise.resolve([{ id: 1 }, { id: 2 }]),
    }));
    global.fetch = fetchMock;
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('should fetch comments and update the comment count element', async () => {
    await myCommentCount('123', commentCountMock);

    expect(fetchMock).toHaveBeenCalledWith('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/RIQXlT0tOk3Ka907K1S2/comments?item_id=item123');

    expect(commentCountMock.innerText).toBe('Comments(2)');
  });
});
