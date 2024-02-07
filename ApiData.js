import React, { Component } from "react";

class ApiData extends Component {
  constructor() {
    super();
    this.state = {
      records: [],
    };
  }

  increase(index) {
    this.setState((prevState) => {
      const updatedRecords = [...prevState.records];
      updatedRecords[index] = {
        ...updatedRecords[index],
        count: updatedRecords[index].count + 1,
      };
      return { records: updatedRecords };
    });
  }

  decrease(index) {
    this.setState((prevState) => {
      const updatedRecords = [...prevState.records];
      if (updatedRecords[index].count > 0) {
        updatedRecords[index] = {
          ...updatedRecords[index],
          count: updatedRecords[index].count - 1,
        };
      }
      return { records: updatedRecords };
    });
  }

  delete1(index) {
    const updatedRecords = [...this.state.records];
    updatedRecords.splice(index, 2);
    this.setState({
      records: updatedRecords,
    });
  }

  sortEntriesByCount(records) {
    return records.sort((a, b) => b.count - a.count);
  }

  componentDidMount() {
    fetch("https://openlibrary.org/people/mekBot/books/currently-reading.json")
      .then((response) => response.json())
      .then((data) => {
        const data1 = data.reading_log_entries.map((entry) => ({
          data: entry,
          count: 0,
        }));
        this.setState({ records: data1 });
      })
      .catch((err) => console.log(err));
  }

  render() {
    const sortedRecords = this.sortEntriesByCount(this.state.records);

    return (
      <div>
        <ul
          style={{
            display: "flex",
            alignContent: "center",
            alignItems: "center",
          }}
        >
          {sortedRecords.map((entry, index) => {
            const coverId = entry.data.work.cover_id;
            const coverurl = coverId
              ? `https://covers.openlibrary.org/b/id/${coverId}-L.jpg`
              : null;

            return (
              <div className="bookdetail">
                <li className="book-item">
                  <div className="atci">
                    <div className="at">
                      <strong style={{color:'pink'}}className="title">Title:</strong>{" "}
                     <p style={{color:'pink'}}>{entry.data.work.title}</p>  <br />
                      <strong style={{color:'pink'}}className="title">Author:</strong>{" "}
                      <p style={{color:'pink'}}>{entry.data.work.author_names}</p>
                      
                      <br />
                    </div>
                    <div className="ci">
                      {coverurl && (
                        <img
                          style={{ height: "500px", width: "300px",marginRight:'10px' }}
                          src={coverurl}
                          alt="Book Cover"
                          className="cover-image"
                        />
                      )}
                    </div>
                  </div>

                  <div className="btn">
                    <p style={{color:'pink'}}>Count: {entry.count || 0}</p>

                    <button onClick={() => this.increase(index)}>Like</button>
                    <button onClick={() => this.decrease(index)}>
                      Dislike
                    </button>
                    <button onClick={() => this.delete1(index)}>Delete</button>
                  </div>
                </li>
              </div>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default ApiData;
