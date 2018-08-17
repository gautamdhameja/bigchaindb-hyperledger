import { Body, Controller, Get, NotFoundException, Param, Post, Req } from '@nestjs/common';
import { NumberService } from './number.service';
import { NumberDto } from './number.model';
import { ApiOAuth2Auth, ApiOperation, ApiResponse, ApiUseTags, ApiImplicitHeader } from '@nestjs/swagger';
import { InvokeResult } from '../common/utils/invokeresult.model';

@ApiUseTags('numbers')
@Controller('numbers')
export class NumberController {

    /**
     * Creates an instance of CarController.
     * @memberof CarController
     * @param {CarService} numberService
     */
    constructor(private numberService: NumberService) {
    }

    /**
     * Get number by id
     *
     * @returns {Promise<NumberDto[]>}
     * @memberof CarController
     * @param id
     */
    @Get(':id')
    @ApiOperation({title: 'Get Value For Asset'})
    @ApiResponse({
        status: 200,
        description: 'Returns a Number object',
        type: NumberDto,
    })
    @ApiResponse({
        status: 404,
        description: 'Number does not exist!',
        type: NotFoundException
    })
    getValueForAsset(@Param('id') id: string): Promise<NumberDto> {
        return this.numberService.getValueForAsset(id);
    }

    /**
     * Create new number
     *
     * @param {NumberDto} numberDto
     * @param req
     * @returns {*}
     * @memberof CarController
     */
    @Post()
    @ApiOperation({title: 'Get Value For Asset With Callback'})
    @ApiResponse({
        status: 201,
        description: 'The record has been successfully created.',
    })
    getValueForAssetWithCallback(@Body() numberDto: NumberDto): Promise<InvokeResult> {
        return this.numberService.getValueForAssetWithCallback(numberDto);
    }

    /** 
     * Get data by id 
     * 
     * @returns {Promise<CarDto[]>} 
     * @memberof CarController 
     * @param id 
     */ 
    @Get() 
    @ApiOperation({title: 'Get a data by id'}) 
    @ApiResponse({ 
        status: 200, 
        description: 'Returns a Car object', 
        type: {}, 
    }) 
    @ApiResponse({ 
        status: 404, 
        description: 'Car does not exist!', 
        type: NotFoundException 
    }) 
    getById(): Promise<any> { 
        return this.numberService.getById(); 
    } 

}