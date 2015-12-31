if (Meteor.isClient) {

      Template.prese.rendered = () => {

          $('.slide').first().addClass( "selected" );
      }

      Template.prese.helpers({

          rows: () => {
              return slideshow.rows
          }

          /* currentId: () => {
              return slideshow.rows[current[1]].columns[current[0]].id
          }*/

      });

      Template.body.events({
          'keyup': function (e) {
              e.preventDefault();
              if (e.keyCode === 38) {
                  console.log('up!')
                  move( 0, -1 );
              } else if (e.keyCode === 40) {
                  console.log('down!')
                  move( 0, 1 );
              } else if (e.keyCode === 37) {
                  console.log('left!')
                  move( -1, 0 );
              } else if (e.keyCode === 39) {
                  console.log('right!')
                  move( 1, 0 );
              }
          }
      });

      var current = [0, 0];

      let slideshow = {
          title: 'Name of the slideshow',
          rows: [

              {
                  columns:
                  [
                      { id: 1, title: 'title1', content: 'content1' }, { id: 2, title: 'title2', content: 'content2' }, { id: 3, title: 'title3', content: 'content3' }, { id: 4, title: 'title4', content: 'content4' }
                  ]
              },

              {
                  columns:
                  [
                      { id: 5, title: 'title5', content: 'content5' }, { id: 6, title: 'title6', content: 'content6' }
                  ]
              },
          ]
      };

      let move = (x, y) => {
          console.log(x);
          console.log(y);
          let newX = x + current[0];
          let newY = y + current[1];

          if (newY >= 0 && slideshow.rows.length > newY && newX >= 0 && slideshow.rows[newY].columns.length > newX ) {
              console.log('x: ' + newX + ', y: ' + newY)
              changeCurrent(newX, newY);
          }
      };

      let changeCurrent = (x, y) => {
          let previous = getSlide(current[0], current[1]);
          let next = getSlide(x, y);
          current = [x, y];
          $('#' + previous.id).removeClass( "selected" );
          $('#' + next.id).addClass( "selected" );
      };

      let getSlide = (x, y) => {
          return slideshow.rows[y].columns[x];
      };

}
