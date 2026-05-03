import { Button } from '@heroui/react';
import { OnSurface } from '../components/checkboxGroup';
import { ImageCard } from '../components/imageCard';
import { Hero } from '../components/hero';

export default function App() {
    return (
        <div className='justify-between px-8 ٖpx-8 '>
            <Hero />
            <div className="flex flex-row gap-3 justify-between mt-4">
                <ImageCard image={"https://images.unsplash.com/photo-1628102491629-778571d893a3?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} text="Wide variety of everyday products" />
                <ImageCard image={"https://plus.unsplash.com/premium_photo-1664305040276-66cf5c0ac52b?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} text="Fast and on-time delivery" />
                <ImageCard image={"https://plus.unsplash.com/premium_photo-1664305044490-e87211947cbd?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} text="Guaranteed freshness and quality" />
                <ImageCard image={"https://images.unsplash.com/photo-1732624579696-fb037f580042?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} text="Competitive prices and daily discounts" />
                <ImageCard image={"https://images.unsplash.com/photo-1723128938283-5ce398830880?q=80&w=1136&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} text="Easy shopping and a seamless user experience" />
            </div>
        </div>
    );
}

