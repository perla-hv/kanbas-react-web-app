import JavaScript from "./JavaScript";
import PathParameters from "./routing/PathParameters";
import ConditionalOutput from "./ConditionalOutput";
import Add from "./Add";
import Styles from "./Styles";
import Highlight from "./Highlight";
import Classes from "./Classes";
import TodoItem from "./todos/TodoItem";
import TodoList from "./todos/TodoList";
function Assignment3() {
    return (
      <div className="container">
        <h1>Assignment 3</h1>
        <Highlight>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipitratione eaque illo minus cum, saepe totam
                vel nihil repellat nemo explicabo excepturi consectetur. Modi omnis minus sequi maiores, provident voluptates.
            </Highlight>
        <ConditionalOutput/>
        <Styles/>
        <Classes/>
        <PathParameters />
        <Add a={3} b={4} />
        <TodoItem/>
        <TodoList/>
        <JavaScript/>
      </div>
    );
  }
  export default Assignment3;
  
  