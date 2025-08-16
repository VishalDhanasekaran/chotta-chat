import { createOllama } from "ollama-ai-provider";
import { streamText } from "ai";

export async function POST(req: Request) 
{
  try 
  {
    const { messages } = await req.json();
    
    // Create Ollama instance
    const ollama = createOllama({
      baseURL: 'http://localhost:11434',
    });
    
    // Get the model
    const model = ollama('tinyllama');
    
    // Stream the response
    const result = await streamText({
      model,
      messages,
      maxTokens: 1000,
    });
    
    return result.toTextStreamResponse;
  } 
  catch (error) 
  {
    console.error('Error in chat API:', error);
    
    return Response.json(
      { error: 'Failed to process chat request' },
      { status: 500 }
    );
  }
}