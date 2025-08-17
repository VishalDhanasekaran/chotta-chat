export interface AIRequest
{
    model: string;
    messages: string[];
    stream?: boolean
}

export interface AIResponse
{
    model: string;
    created: string;
    message: string[];
}