import 
ReactFlow,
{
  Background,
  Controls, 
  EdgeText,
  MiniMap,
  useEdgesState,
  useNodesState,
  BackgroundVariant
} from 'react-flow-renderer';
import Header from '../../components/header/header';
import mindMap from '../../app-data/mindMap';
import './graph-page.css';

function GraphPage() {
  const [nodes, , onNodesChange] = useNodesState(mindMap.nodes);
  const [edges, , onEdgesChange] = useEdgesState(mindMap.edges);

  return(
    <>
      <Header />
        <div className='graph-container'>
          <ReactFlow
            nodes={nodes}
            edges={edges}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            fitView
          >
            <EdgeText x={0} y={0}/>
            <Background 
              variant={BackgroundVariant.Dots} 
              color='#35246e'
            />
            <MiniMap />
            <Controls showInteractive={true}/>
          </ReactFlow>
        </div>
    </>
  );
}

export default GraphPage;